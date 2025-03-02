import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t border-gray-800  px-2 flex items-center justify-center mt-auto py-2">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-2">
                <div className="text-sm text-gray-500">© 2025 Voucher. All rights reserved.</div>
                <div className="flex gap-6">
                    <Link
                        href="#"
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                        Terms
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                        Privacy
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                        Support
                    </Link>
                </div>
            </div>
        </footer>
    );
};
