import { roboto } from "@/lib/font";
import { Linkedin, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mb-12">
      <hr className="border-2 border-tertiary-bg " />

      <div className="mt-6 flex justify-between items-center ">
        <div>
          <Image
            src={"/logo.png"}
            width={200}
            height={200}
            alt="logo"
            className=" rounded-md"
          />

          <p className={`${roboto.className} text-gray-400 mt-4`}>
            © 2024-2025 TechKareer. All rights reserved.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-8 justify-end">
            <Link href={"https://x.com/techkareer"}>
              <TwitterIcon className="text-white" />
            </Link>

            <Link href={"https://www.linkedin.com/company/thetechkareer"}>
              <Linkedin className="text-white" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href={"https://www.techkareer.com/terms-of-service"}>
              <p className={`${roboto.className} text-gray-400 mt-4`}>
                Terms & Service
              </p>
            </Link>
            <Link href={"https://www.techkareer.com/privacy-policy"}>
              <p className={`${roboto.className} text-gray-400 mt-4`}>
                Privacy Policy
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
