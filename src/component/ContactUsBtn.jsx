import Link from "next/link";

const ContactUsBtn = ({ c }) => {
    return (
        <div className="mt-5">
            <Link
                href="/contact"
                className="bg-red-600 text-white px-5 py-2 hover:bg-red-700 transition text-center font-medium rounded-full"
                onClick={() => setIsOpen(false)}
            >
                {c}
            </Link>
        </div>
    )
}

export default ContactUsBtn;