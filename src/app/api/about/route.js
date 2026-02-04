import connectDB from "../../../config/db.js";
import Footer from "./modal.js";

export async function GET(request) {

    try {


        // Connect to the database
        await connectDB();

        // Create a new document in the ServicesPage collection
        const data = await Footer.find();

        // Return success response
        return new Response(
            JSON.stringify({ message: "footer content fetched successfully", data: data }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Server error:", error);

        // Return error response
        return new Response(
            JSON.stringify({ error: "There was a server-side problem" }),
            { status: 500 } // 500 is better for server errors
        );
    }



}


export async function POST(request) {
    try {
        // Parse the incoming JSON data
        const data = await request.json();

        // Connect to the database
        await connectDB();

        // Create a new document in the ServicesPage collection
        await Footer.create(data);

        // Return success response
        return new Response(
            JSON.stringify({ message: "footer content created successfully" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Server error:", error);

        // Return error response
        return new Response(
            JSON.stringify({ error: "There was a server-side problem" }),
            { status: 500 } // 500 is better for server errors
        );
    }
}





