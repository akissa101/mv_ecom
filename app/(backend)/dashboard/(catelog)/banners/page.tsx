import PageHeader from "@/components/PageHeader";
import TableActions from "@/components/TableActions";
import { Plus, Search, Trash2, Upload } from "lucide-react";
import React from "react";
import UploadImageForm from "@/components/ui/formInputs/UploadImageForm";

type Props = {};

export default function Banners({}: Props) {
  return (
    <div>
      {/* Header with add button */}
      <PageHeader
        href="/dashboard/banners/new"
        title="Banners"
        icon={<Plus />}
        btnLabel="Add Coupon"
      />

      {/* Table search  and actions bar */}
      <TableActions />

      {/* Table */}
      <UploadImageForm />
    </div>
  );
}
