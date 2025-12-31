"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { BsLayoutSidebarReverse } from "react-icons/bs";

type Post = {
  id: string;
  title: string;
  content: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // create note state
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 🔐 Protect + fetch posts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }

    fetch("/api/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          router.replace("/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) setPosts(data.posts);
      })
      .finally(() => setLoading(false));
  }, [router]);

  // 🚪 Logout
  function handleLogout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  // 🗑️ Delete post
  async function handleDelete(id: string) {
    const token = localStorage.getItem("token");
    if (!token) return;

    await fetch("/api/posts", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });

    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  // ✏️ Create post
  async function handleCreate() {
    const token = localStorage.getItem("token");
    if (!token || !title.trim()) return;

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();
    setPosts((prev) => [data.post, ...prev]);

    setTitle("");
    setContent("");
    setShowForm(false);
  }

  return (
    <div className="flex">
      {/* sidebar */}
      <div
        className={`h-screen w-72 border-r border-gray-200 flex flex-col justify-between fixed md:static bg-white z-50 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="h-16 text-lg pl-4 font-semibold border-b border-gray-200 flex items-center justify-between">
          <div>NoteSpace</div>
          <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="pr-4 text-xl text-gray-600 cursor-pointer md:hidden"
          >
            <BsLayoutSidebarReverse />
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <div className="pl-4 pb-4">
          <div className="font-semibold">Profile</div>
          <div>User</div>
          <div className="text-sm text-gray-500">Logged in</div>
        </div>

        <div className="px-4 mb-4">
          <button
            onClick={handleLogout}
            className="bg-[#F5F5F5] w-full rounded px-4 py-1 border border-gray-300 text-sm font-semibold hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
        </div>
      </div>

      <div className="w-full h-screen">
        {/* header */}
        <header className="w-full flex justify-between items-center h-16 border-b border-gray-200 px-4">
          <div className="flex items-center gap-2">
            <div
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-xl text-gray-600 cursor-pointer md:hidden"
            >
              <BsLayoutSidebarReverse />
            </div>
            <div className="text-lg font-bold">Notes</div>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#F5F5F5] rounded px-4 py-1 border border-gray-300 text-sm font-semibold hover:bg-gray-200 flex items-center gap-2"
          >
            <IoIosAddCircleOutline />
            Add Note
          </button>
        </header>

        {/* main */}
        <main className="p-4">
          {showForm && (
            <div className="absolute left-0 top-0 w-screen h-screen bg-black/50">
              <div className="absolute top-14 right-20 bg-white w-96 border border-gray-200 rounded p-4 mb-4">
              <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow text-sm shadow-gray-300 my-2 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300 pl-2"
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="shadow text-sm shadow-gray-300 my-2 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300 pl-2 resize-none"
              />
              <button
                onClick={handleCreate}
                className="border p-2 w-full bg-[#37383F] text-white rounded-lg cursor-pointer text-sm hover:bg-neutral-600"
              >
                Create
              </button>
            </div>
            </div>
          )}

          {loading ? (
            <div>Loading...</div>
          ) : posts.length === 0 ? (
            <div className="text-gray-500">No notes yet</div>
          ) : (
            <div className="border border-gray-200 rounded">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="px-4 py-3 flex justify-between border-b border-gray-200 items-center"
                >
                  <div className="flex justify-center items-center gap-2">
                    <div className="font-medium">{post.title}:</div>
                    <div className="text-sm text-gray-500">{post.content}</div>
                  </div>
                  <MdDelete
                    onClick={() => handleDelete(post.id)}
                    className="cursor-pointer text-2xl text-red-500"
                  />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
