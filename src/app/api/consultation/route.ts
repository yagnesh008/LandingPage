import { EmailJSResponseStatus } from "@emailjs/nodejs";
import * as emailjs from "@emailjs/nodejs";
import { Phone } from "lucide-react";
import { title } from "process";
console.log("KEY CHECK:", process.env.API_email_key_1);
emailjs.init({
    publicKey: process.env.API_email_key_1!,
    privateKey: process.env.API_email_private_1!, // server-only, keeps requests strict-authenticated
    
});
export async function POST(req: Request) {
    try {
        const data = await req.json();

        console.log("Received data:", data);
        const getResponse = await fetch(process.env.SHEETDB_API_URL!);
        if (!getResponse.ok) {
            throw new Error("Failed to get existing consultations");
        }

        const existingData = await getResponse.json();

        const response = await fetch(process.env.SHEETDB_API_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: [
                    {
                        "S.NO": existingData.length + 1,
                        Name: data.name,
                        Email: data.email,
                        "Phone Number": data.phonenumber,
                        "Consultation Type": data.needs,
                        "Project Description": data.message,
                    },
                ],
            }),
        });

        const result = await response.text();

        console.log("SheetDB status:", response.status);
        console.log("SheetDB response:", result);

        try {
            await emailjs.send(
                process.env.API_email_serv_1!,
                process.env.API_email_temp_1!,
                {
                    name: data.name,
                    email: data.email,
                    title: data.needs,
                }
                
            );
        } catch (emailError) {
            // Don't fail the whole request just because the email notification failed
            console.error("EmailJS error:", emailError);
        }
        try {
            await emailjs.send(
                process.env.API_email_serv_1!,
                process.env.API_email_temp_2!,
                {
                    name: data.name,
                    email: data.email,
                    phone:data.phonenumber,
                    title: data.needs,
                }
                
            );
        } catch (emailError) {
            // Don't fail the whole request just because the email notification failed
            console.error("EmailJS error:", emailError);
        }

        return Response.json(
            {
                success: response.ok,
                sheetdbResponse: result,
            },
            {
                status: response.status,
            }
            
        );

    } catch (error) {
        console.error("ERROR:", error);

        return Response.json(
            {
                success: false,
                message: "Something went wrong",
            },
            { status: 500 }
        );
    }
}
