"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { delUser, getUserById } from "@/service/users/userCallAPI";
import { useAuth } from "@/app/context/AuthContext";
const DelDialog = ({
  openDialogDelUsers,
  setOpenDialogDelUsers,
  onClose,
  id,
  lsh,
}: any) => {
  const { token, session } = useAuth();
  const [confirmationText, setConfirmationText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (openDialogDelUsers && id) {
      refetch();
    }
  }, [openDialogDelUsers, id]);
  const {
    isPending,
    error,
    data: getUserId,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["get-id-user-del-profile"],
    queryFn: async () => {
      try {
        const res: any = await getUserById({ id, token });

        return res;
      } catch (err) {
        throw err;
      }
    },
  });

  const delProduct = useMutation({
    mutationFn: async ({ id, token }: any) => {
      return await delUser({ token, id });
    },
    onSuccess: (res) => {
      alert("ลบสำเร็จ");
      // onClose();
      lsh();
    },
    onError: (err) => {
      console.log(err);
      onClose();
    },
  });

  const handleDelUser = (id: any) => {
    delProduct.mutate({ id, token });
  };
  return (
    <>
      <Dialog open={openDialogDelUsers} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-gray-900 to-gray-800 text-white border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-red-400">
              <AlertTriangle className="h-6 w-6" />
              ยืนยันการลบ
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              การกระทำนี้ไม่สามารถยกเลิกได้ กรุณาพิมพ์{" "}
              <span className="font-bold text-yellow-400">
                &quot;{`${getUserId?.email}`}&quot;
              </span>{" "}
              เพื่อยืนยัน
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="confirmationText"
                className="text-right text-gray-300"
              >
                ยืนยัน
              </Label>
              <Input
                id="confirmationText"
                value={confirmationText}
                onChange={(e) => setConfirmationText(e.target.value)}
                className="col-span-3 bg-gray-700 border-gray-600 text-white"
                placeholder={`พิมพ์ "${getUserId?.email}" เพื่อยืนยัน`}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button
              variant="outline"
              onClick={onClose}
              className="bg-transparent border-gray-500 text-gray-300 hover:bg-gray-700 transition-colors duration-300"
              disabled={isDeleting}
            >
              ยกเลิก
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleDelUser(getUserId?.id)}
              disabled={
                confirmationText.toLowerCase() !== getUserId?.email ||
                isDeleting
              }
              className={`bg-red-600 hover:bg-red-700 transition-colors duration-300 ${
                confirmationText.toLowerCase() ===  getUserId?.email && !isDeleting
                  ? "animate-pulse"
                  : ""
              }`}
            >
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  กำลังลบ...
                </>
              ) : (
                "ลบ"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DelDialog;
