import { NextResponse } from "next/server";
import dbConnect from "../../../../config/dbConnect";
import cuser5 from "../../../../models/cuser5";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        // Handle preflight request
        // if (req.method === 'OPTIONS') {
        //     return NextResponse.json(null, { status: 200 }); // Respond to preflight request
        // }

        // Handle the actual request
        const { name, age, phone, disease, description } = await req.json();
        const userDetails= new cuser5({ name, age, phone, disease, description });
        await dbConnect();
        const newUser = await userDetails.save();

        // Set up Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: 'Rahularyan34@gmail.com , Kushwahaakash2000@gmail.com', // Recipient address
            subject: 'New User Registration',
            text: `New inquiry arrived:\n\nName: ${name}\nAge: ${age}\nPhone: ${phone}\nDisease: ${disease}\nDescription: ${description}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "User Registered", request: req }, { status: 201 });
    } catch (error) {
        console.error('Error details:', error.message); // Log specific error message
        return NextResponse.json(
            { message: "An error occurred while registering the user.", error: error.message },
            { status: 500 }
        );
    }
}
