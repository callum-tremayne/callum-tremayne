import { BiSolidEnvelope } from "react-icons/bi";
import { GrDocument } from "react-icons/gr";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

export function ContactSection() {
  return (
    <Card>
      <CardContent className="space-y-5 p-6 sm:p-8">
        <p className="text-muted-foreground">
          If you&apos;d like to connect, collaborate, or discuss potential
          opportunities, feel free to get in touch.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary" size="sm">
            <Link href="mailto:callum.tremayne@gmail.com">
              <BiSolidEnvelope />
              Email
            </Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link
              href="https://www.linkedin.com/in/callum-tremayne/"
              target="_blank"
            >
              <SiLinkedin />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="https://github.com/callum-tremayne/" target="_blank">
              <SiGithub />
              GitHub
            </Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="/cv?print=1" target="_blank">
              <GrDocument />
              View CV
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
