import React from "react";
import AddManagerButton from "@/components/atom/AddManagerButton";

const AddManagerPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Restaurant Managers</h1>
      <AddManagerButton />
    </div>
  );
};

export default AddManagerPage;
