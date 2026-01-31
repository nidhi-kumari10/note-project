import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNode = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="p-5 flex gap-6 h-screen bg-linear-to-br from-pink-200 via-purple-100 to-cyan-200 text-white sm:flex-col lg:flex-row font-[cursive]">
      <form
        className="flex flex-col pt-5 gap-3 lg:w-1/2 p-5 border-2 border-purple-300 bg-white/30 backdrop-blur-sm rounded-4xl shadow-2xl shadow-blue-400
 "
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="font-bold  mb-2 font-[Pacifico] text-4xl text-purple-600">
          My Happy Notes 🌈
        </h1>
        <input
          className="p-4  font-medium outline-none bg-white/70
  border-2 border-purple-300
  rounded-xl
  text-gray-700
  placeholder-gray-500
 "
          type="text"
          placeholder="Enter heading of the note..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="p-4  font-medium h-50 outline-none bg-white/70
  border-2 border-purple-300
  rounded-xl
  text-gray-700
  placeholder-gray-500
  "
          placeholder="Enter details of the note"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
        <button
          className=" h-12 cursor-pointer
  border-2 border-purple-300
  rounded-xl
 
bg-linear-to-br from-purple-500 to-pink-500 active:scale-95 hover:scale-105 transition-all duration-150 font-bold
"
          type="submit"
        >
          Add Note
        </button>
      </form>
      <div className="lg:border-l p-4 ml-4 lg:w-1/2">
        <h1 className="font-bold text-4xl  text-purple-600 font-[Pacifico] ">Your Notes</h1>
        <div className="flex flex-wrap gap-6  mt-4  overflow-y-auto h-[90%]">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className='h-52 w-40  bg-cover items-start  relative flex flex-col justify-evenly rounded
 bg-[url("https://i.pinimg.com/originals/54/39/5d/54395dda4758c22dad34f1f1eda8602b.png")] '
              >
                <div className="pl-4">
                  <h1 className="font-bold text-xl leading-tight text-pink-600">
                    {elem.title}
                  </h1>
                  <p className="mt-4 font-medium leading-tight text-purple-700">
                    {elem.details}
                  </p>
                </div>

                <button
                  className="w-[80%] bg-red-500 text-white rounded mx-auto cursor-pointer hover:bg-red-600 hover:scale-105 text-sm text-center font-bold "
                  onClick={() => {
                    deleteNode(idx);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
