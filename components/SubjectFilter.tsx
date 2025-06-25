"use client";

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { subjects } from "@/constants";

const SubjectFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSubject = searchParams.get('subject') || '';

  const [selectedSubject, setSelectedSubject] = useState(currentSubject);

  useEffect(() => {

    if (selectedSubject && selectedSubject != "all") {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: selectedSubject
      });
  
      router.push(newUrl, { scroll: false });
    } else {
      if (pathname === '/companions') {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["subject"],
        });
  
        router.push(newUrl, { scroll: false });
      }
    }
    
  }, [selectedSubject, router, searchParams, pathname]);

  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value);
  }

  return (
        <Select value={selectedSubject} onValueChange={handleSubjectChange}>
          <SelectTrigger className="input capitalize">
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Subjects</SelectItem>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject} className="capitalize">
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
  )
}

export default SubjectFilter
