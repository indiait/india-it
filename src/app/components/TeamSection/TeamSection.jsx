"use client";

import Image from "next/image";
import { teamMembers } from "@/app/constants/teamMembers";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px] fill-current"
    >
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.13H5.67V18H8.34V10.13ZM7 5.88A1.56 1.56 0 1 0 7 9a1.56 1.56 0 0 0 0-3.12ZM18.33 13.17c0-2.37-1.52-3.27-2.95-3.27a2.6 2.6 0 0 0-2.35 1.2h-.04v-.97H10.5V18h2.67v-4.25c0-1.12.21-2.2 1.6-2.2 1.37 0 1.39 1.28 1.39 2.27V18h2.67Z" />
    </svg>
  );
}

function TeamMemberCard({ member }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <div className="relative h-[156px] w-full bg-neutral-900 md:h-[320px]">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{ objectFit: "cover" }}
            className="grayscale"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#111827,#3f3f46)] text-[2.1rem] font-semibold tracking-[0.12em] text-white md:text-[3.5rem] md:tracking-[0.18em]">
            {member.initials}
          </div>
        )}
      </div>

      <div className="min-h-[110px] flex-1 bg-[#f6f6f6] px-3 py-4 text-slate-900 md:min-h-[132px] md:px-5 md:py-5">
        <div className="flex items-start justify-between gap-2 pb-2 md:gap-4">
          <h3 className="text-cyan text-[0.95rem] leading-6 font-semibold md:text-base md:leading-8">
            {member.name}
          </h3>

          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver LinkedIn de ${member.name}`}
              className="mt-1 flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center text-slate-700 transition-colors duration-200 hover:text-cyan"
            >
              <LinkedInIcon />
            </a>
          ) : null}
        </div>
        <p className="text-dark text-[0.95rem] leading-5 md:text-lg">
          {member.role}
        </p>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section className="bg-white px-3 py-12 md:px-8 md:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="pb-8 text-[32px] font-semibold leading-tight text-slate-900 md:pb-10 md:text-[36px]">
          Nuestro equipo
        </h2>

        <div className="grid grid-cols-2 gap-3 md:gap-5 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
