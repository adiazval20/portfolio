'use client'

import { Experience } from "@/app/data/experience"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { useState } from "react";

interface ExperienceProps {
  items: readonly Experience[]
}

export default function ExperienceClient({ items }: ExperienceProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <>
      {items.map((item, index) => (
        <Disclosure key={item.id} as="div" className="experience-item">
          {({ open, close }) => {
            if (open && openIndex !== index) {
              close()
            }
            return (
              <>
                <DisclosureButton className="experience-item-title" onClick={() => { if(!open) setOpenIndex(index) }}>
                  <div className="item-title">
                    <div className="item-title-left">{item.title}</div>
                    <div className="item-title-right">{item.dateFrom} - {item.dateTo}</div>
                  </div>
                </DisclosureButton>
                {open &&
                  <DisclosurePanel transition className="experience-body">
                    <div className="item-sub-title">
                      <div className="item-title-left">{item.company}</div>
                      <div className="item-title-right">{item.location}</div>
                    </div>
                    <ul>
                      {item.bulletPoints.map((bp, i) => (
                        <li key={i}>{bp}</li>
                      ))}
                    </ul>
                    <div className="tools">
                      {item.tools?.map((tool, i) => (
                        <span className="tool" key={i}>{tool}</span>
                      ))}
                    </div>
                  </DisclosurePanel>
                }
              </>
            )
          }}

        </Disclosure>
      ))}
    </>

  )
}