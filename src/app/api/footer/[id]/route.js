import connectDB from "../../../../config/db.js";
import Footer from "../modals.js";



export async function PUT(request, { params }) {
    try {
        // Parse the incoming JSON data
        const data = await request.json();
        const { id } = await params;

        console.log(id);

        // Connect to the database
        await connectDB();

        // Create a new document in the ServicesPage collection
        await Footer.findOneAndUpdate({ _id: id }, data);

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


