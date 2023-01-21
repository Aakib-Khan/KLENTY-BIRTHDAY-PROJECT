import { useEffect, useState } from "react";
import FileBase from "react-file-base64";

export default function Form({ setCurrentId, currentId }) {
  const [from, setfrom] = useState('')
  const [name, setName] = useState("")
  const [email, setemail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState("");


  const clear = (e) => {
    setCurrentId(null)
    setemail("");
    setfrom("");
    setName("");
    setMessage("");
    setDate("");
    setSelectedFile("");
  };
  const getPostDetails = async () => {
    let result = await fetch(`/posts/${currentId}`);
    result = await result.json();
    setfrom(result.from);
    setemail(result.email);
    setName(result.name);
    setMessage(result.message);
    setDate(result.date);
    setSelectedFile(result.selectedFile);
  };
  useEffect(() => {
    if (currentId) {
      getPostDetails();
      // setCurrentId(null)
    }
  }, [currentId]);

  const updateProduct = async () => {
    let result = await fetch(
      `/posts/updatepost/${currentId}`,
      {
        method: "put",
        body: JSON.stringify({
          from,
          name,
          date,
          email,
          message,
          selectedFile,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    clear();
  };
  const addPost = async (e) => {
    let result = await fetch("/posts/addPost", {
      method: "post",
      body: JSON.stringify({
        name,
        from,
        date,
        email,
        message,
        selectedFile,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
// console.log(email,date,message,name);
    clear();
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      updateProduct();
      
    } else {
      addPost();
      
    }
  };
  
  return (
    <div className="pl-8 rounded py-9 w-[190px]  ">
      <h1 className=" font-bold text-lg text-center  tracking-widest ml-2 ">Create a Wish</h1>
      <input
        type="text"
        className="border rounded-md py-1 text-center font-mono my-2 "
        placeholder="Name Of Sender"
        name="name"
        value={from}
        onChange={(e) => setfrom(e.target.value)}
      />
      <input
        type="text"
        className="border rounded-md py-1 text-center font-mono my-2 "
        placeholder="Name Of Your Friend"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="border rounded-md py-1 text-center font-mono my-2 "
        placeholder="Enter Email"
        name="title"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <span className="font-mono  ">Enter Birth Date</span>
      <input
        type="date"
        className="border rounded-md pb-1 text-center font-mono my-2 "
        placeholder="dd-mm-yy "
        
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <input
        type="text"
        className="border rounded-md py-1 text-center font-mono my-2 "
        placeholder="Message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />{" "}
      <div>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setSelectedFile(base64)}
          // className='my-2'
        />
      </div>
      <button
        className="bg-blue-700 py-2 px-16 text-white font-mono rounded-lg text-[20px] my-2  hover:bg-blue-900"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <br />
      <button
        onClick={clear}
        className="bg-rose-500 py-2 px-[70px] text-white font-mono rounded-lg text-[20px] mt-2 hover:bg-rose-900"
      >
        Clear
      </button>
    </div>
  );
}
