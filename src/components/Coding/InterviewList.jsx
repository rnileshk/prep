import React, { useState, useEffect } from 'react';
import { Coding } from './utils/schema';
import { useUser } from '@clerk/clerk-react'; // React-compatible Clerk hook
import { db } from './utils/db'; // Adjust the import path as necessary
import { eq, desc } from 'drizzle-orm';
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    try {
      const result = await db
        .select()
        .from(Coding)
        .where(eq(Coding.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(Coding.id));

      console.log("Fetched Interviews:", result);
      setInterviewList(result);
    } catch (error) {
      console.error("Error fetching interviews:", error);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Previous DSA Practice List</h2>
      <div className="interview-grid">
        {interviewList.length > 0 ? (
          interviewList.map((interview, index) => (
            <InterviewItemCard key={index} interview={interview} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No previous DSA Practice found.</p>
        )}
      </div>
    </div>
  );
}

export default InterviewList;
