import Image from "next/image";

interface Props {
  threadId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
}

function DeleteThread({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) {
  return (
    <Image
      src="/assets/delete.svg"
      alt="delte"
      width={18}
      height={18}
      className="cursor-pointer object-contain"
    />
  );
}

export default DeleteThread;
