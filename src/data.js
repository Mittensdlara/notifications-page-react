import avatar1 from "./assets/images/avatar-mark-webber.webp";
import avatar2 from "./assets/images/avatar-angela-gray.webp";
import avatar3 from "./assets/images/avatar-jacob-thompson.webp";
import avatar4 from "./assets/images/avatar-rizky-hasanuddin.webp";
import avatar5 from "./assets/images/avatar-kimberly-smith.webp";
import avatar6 from "./assets/images/avatar-nathan-peterson.webp";
import avatar7 from "./assets/images/avatar-anna-kim.webp";
import chess from "./assets/images/image-chess.webp";

const data = [
  {
    id: 1,
    name: "Mark Webber",
    picture: avatar1,
    comment: "reacted to your recent post",
    commentOn: "My first tournament today!",
    time: "1m ago",
    read: false
  },
  {
    id: 2,
    name: "Angela Gray",
    picture: avatar2,

    comment: "followed you",
    commentOn: "",
    time: "5m ago",
    read: false

  },
  {
    id: 3,
    name: "Jacob Thompson",
    picture: avatar3,

    comment: "has joined your group",
    commentOn: "Chess Club",
    time: "1 day ago",
    read: false

  },
  {
    id: 4,

    name: "Rizky Hasanuddin",
    picture: avatar4,

    comment: "sent you a private message",
    commentOn: "",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    read: true

  },
  {
    id: 5,
    name: "Kimberly Smith",
    picture: avatar5,

    comment: "commented on your picture",
    pictureNotif: chess,
    time: "1 week ago",
    read: true

  },
  {
    id: 6,
    name: "Nathan Peterson",
    picture: avatar6,

    comment: "reacted to your recent post",
    commentOn: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    read: true

  },

  {
    id: 7,
    name: "Anna Kim",
    picture: avatar7,

    comment: "left the group",
    commentOn: "Chess Club",
    time: "2 weeks ago",
    read: true
  },
];

export default data;
