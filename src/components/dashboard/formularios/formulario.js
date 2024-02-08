'use client'
import { useState } from "react";
import Image from "next/image";
import GetImages from "../image-card/image-card";

export default function Formulario({type}) {
  const [file, setFile] = useState();
  const [title_file, setTitle_file] = useState();
  const [comment, setComment] = useState();

  
  const title= type.toUpperCase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);
      data.set("title_file", title_file);
      data.set("folder", type);
      (type==='especialidades')
      ? data.set('especialidades', comment)
      : null;

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      console.log(res);

      if (res.ok) {
        window.location.reload()
        console.log("File uploaded successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    if (!e.target.files?.[0]) return;
    setFile(e.target.files?.[0]);
  };


  const handleTitleFileChange = (e) => {
    setTitle_file(e.target.value); 
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value); 
  };

  return (
<div className="flex m-5 ">
      <div className="bg-zinc-950 p-5 rounded-lg border border-blue">
        <h1 className="text-4xl text-center my-4 text-white">{title}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2"
            onChange={handleFileChange}
          />
          <input
            type="text"
            className="bg-zinc-500 text-zinc-100 p-2 rounded block mb-2"
            placeholder="Add Title File"
            onChange={handleTitleFileChange}
          />
          {
              (type==='especialidades')
              ?<textarea
              type="textarea"
              className="bg-zinc-500 text-zinc-100 p-2 rounded block mb-2"
              placeholder="Add a comment"
              onChange={handleCommentChange}
            />
              :null
          }
          <button
            className="bg-blue-900 text-zinc-100 p-2 rounded block w-full disabled:opacity-50"
            disabled={!file}
          >
            Upload
          </button>
        </form>
        {file && (
          <Image
            src={URL.createObjectURL(file)}
            alt="Uploaded file"
            className="w-64 h-64 object-contain mx-auto"
            width={256}
            height={256}
          />
        )}
        <GetImages type={type}/>
      </div>
      
    </div>
  );
}


