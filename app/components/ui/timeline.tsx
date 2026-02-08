"use client";
import { TimelineElement } from "@/app/lib/types";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Building2 } from "lucide-react";

type TimelineProps = {
  data: TimelineElement[];
};

export default function Timeline({ data }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal/50 via-teal/20 to-transparent hidden md:block" />

      <ul className="space-y-8">
        {data.map((experience, i) => {
          const { role, company, duration, location, type, description } =
            experience;

          return (
            <motion.li
              key={`${company}-${i}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-teal border-4 border-midnight-900 hidden md:block z-10" />

              {/* Experience Card */}
              <div className="md:ml-20 bg-midnight-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 md:p-8 hover:border-teal/30 transition-all duration-300">
                {/* Header: Role & Company */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-7 h-7 text-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-100">
                        {role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-400 font-medium">
                          {company}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal/10 border border-teal/30 text-teal text-sm font-medium">
                    {type}
                  </span>
                </div>

                {/* Meta Info Row */}
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-slate-700/30">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">{duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">{location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-slate-300 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
