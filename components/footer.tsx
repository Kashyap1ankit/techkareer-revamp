import { roboto } from "@/lib/font";
import { Linkedin, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-12 px-4 sm:px-6 lg:px-8">
      <hr className="border-2 border-tertiary-bg" />

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Image
            src={"/logo.png"}
            width={200}
            height={200}
            alt="logo"
            className="rounded-md mb-4"
          />
          <p className={`${roboto.className} text-gray-400`}>
            © 2024-2025 TechKareer. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-8">
          <div className="flex gap-6">
            <Link href={"https://x.com/techkareer"} aria-label="Twitter">
              <TwitterIcon className="text-white hover:text-gray-300 transition-colors" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/thetechkareer"}
              aria-label="LinkedIn"
            >
              <Linkedin className="text-white hover:text-gray-300 transition-colors" />
            </Link>
          </div>

          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href={"https://www.techkareer.com/terms-of-service"}>
              <p className={`${roboto.className} text-gray-400`}>
                Terms & Service
              </p>
            </Link>
            <Link href={"https://www.techkareer.com/privacy-policy"}>
              <p className={`${roboto.className} text-gray-400`}>
                Privacy Policy
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
