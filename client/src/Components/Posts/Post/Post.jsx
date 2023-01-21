import { MdDelete, MdMoreHoriz, MdOutlineThumbUpAlt } from "react-icons/md";
import moment from "moment";

export default function Post({ post, setCurrentId }) {
  // console.log(post);
  const deleteProduct = async (id) => {
    let result = await fetch(`/posts/deletepost/${id}`, {
      method: "Delete",
    });
    result = await result.json();
  };

  const sendWishMail  =()=>{

    window.location.href=`mailto:${post.email}?subject=Birthday Wish From ${post.from}&body=${post.message} (${ post.email})  `
  } 


  return (
    <div className="w-[350px] h-[430px]   relative mx-9 bg-white rounded-2xl overflow-hidden shadow-lg ">
      {
        <div className="">
          <img
            src={post.selectedFile}
            className="w-[350px] h-[250px] object-cover"
            alt="img"
          />

          <div className="px-6 pt-2 h-36">
            <div className="">
              <div className="pt-2 absolute top-2 text-white text-xl font-semibold tracking-wide ">
                {post.name}
                <div className="text-sm">
                  {moment(post.createdAt).fromNow()}
                </div>
              </div>

              <span className="tracking-widest text-xs  font-medium text-gray-400 ">
                {post.email}
              </span>

              <button
                onClick={() => setCurrentId(post._id)}
                className="float-right text-2xl mt-1"
              >
                <MdMoreHoriz title="Update Post" />
              </button>

              <div className=" flex  mt-3 ">
                <span className="inline-block text-start font-bold text-2xl" >

                 {post.date}
                </span>
              
              <button
                className="flex text-red-700 text-base mt-2 ml-[100px] font-mono "
                onClick={() => deleteProduct(post._id)}
                title="Delete Post"
              >
                Delete{" "}
                <MdDelete
                  type="button"
                  className="mt-1 text-lg  "
                  title="Delete Post"
                />
              </button>
              </div>
              <div className="  ">

              <p className="mt-2  text-gray-500 text-lg font-mono "> {post.message}</p>
              </div>

            <div className="flex justify-center my-4 ">
              <button onClick={sendWishMail} className="font-mono bg-[#F7AB0A] text-white hover:shadow-2xl object-center hover:bg-cyan-600 py-1 px-4 rounded-md  " >Send BirthDay Wish</button>

            </div>


            </div>
          </div>
        </div>
      }
    </div>
  );
}

{
  /* <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div> */
}
