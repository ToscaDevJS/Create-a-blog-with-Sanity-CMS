/* eslint-disable @next/next/no-img-element */
import { formatearFecha } from "@/libs/DateFns.FormatearFecha";
import { CommentDBTypes } from "@/sanity/types/Sanity.CommentTypes";
import { IconPencil, IconStar, IconTrash } from "@tabler/icons-react";
import {
  DrawerActionDeleteCommments,
  DrawerActionEditeCommments,
} from "./Drawer";

export const CardNotas = ({
  text,
  _updatedAt,
  userName,
  userImage,
  rating,
  _id,
}: CommentDBTypes) => {
  return (
    <article>
      <div className="shadow-md border rounded-xl p-3 flex flex-col mt-2">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              src={userImage}
              width={44}
              height={44}
              className=" shadow-xl rounded-full w-11 h-11 bg-white"
              alt="img"
              decoding="async"
              loading="lazy"
            />
            <span>
              <h6 className="font-semibold text-slate-700">{userName}</h6>
              <p className="text-gris text-sm">
                {_updatedAt && formatearFecha(_updatedAt)}
              </p>
            </span>
          </div>
          <span className="flex gap-1 items-start">
            <StartRating rating={Number(rating)} />
            <p className="text-gris text-sm  mt-1">{rating}</p>
          </span>
        </div>
        <p className="text-gris text-sm mt-3">{text}</p>
      </div>
      <div className="w-full flex justify-end mt-1 gap-1">
        <DrawerActionEditeCommments id={_id} />
        <DrawerActionDeleteCommments id={_id} />
      </div>
    </article>
  );
};

export const StartRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <IconStar
      key={index}
      size={18}
      className="mt-1 fill-[#f4b400] stroke-[#f4b400]"
    />
  ));

  return <span className="flex gap-1 items-start">{stars}</span>;
};
