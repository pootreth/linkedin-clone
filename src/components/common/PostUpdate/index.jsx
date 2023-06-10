import { useState, useMemo } from "react";
import { postStatus, getStatus } from "../../../api/FirestoreAPIs";
import ModalComponent from "../Modal";
import PostsCard from "../PostsCard";
import "./index.scss";

export default function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const sendStatus = async () => {
    await postStatus(status);
    await setModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a post
        </button>
      </div>

      <ModalComponent
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        sendStatus={sendStatus}
      />

      <div>
        {allStatus.map((posts) => {
          return <PostsCard posts={posts} />;
        })}
      </div>
    </div>
  );
}
