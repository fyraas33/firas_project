import React, { useEffect, useState } from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { addServiceFile } from "../../redux/slices/serviceSlice";
// import "../Styles/AddFiles.css";

function AddFiles( {setPost,Post}) {
//   const user = useSelector((state) => state.user?.user);
//   const dispatch = useDispatch();
//   const [show, setshow] = useState(false);
  const [upload, setupload] = useState([]);

  const [file, setfile] = useState({
    files: [],
    description: "",
  });

  useEffect(() => {
    setfile({ ...file});
  }, []);
  const bar = document.getElementById("progress-bar");
  const progressDiv = document.getElementById("progress-div");

  const handleDrop = async () => {
    progressDiv.style.display = "block";
    // Push all the axios request promise into a single array
    const uploaders = upload.map(async (file) => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      // formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "iosk7nzi"); // Replace the preset name with your own
      formData.append("api_key", "456821689281721"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      const config = {
        onUploadProgress: function (progressEvent) {
          const percentCompleted = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          bar.setAttribute("value", percentCompleted);
          bar.previousElementSibling.textContent = `${percentCompleted}%`;
          if (percentCompleted === 100) {
            bar.previousElementSibling.textContent = `Upload complete!`;
          }
        },
      };
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return await axios
        .post(
          "https://api.cloudinary.com/v1_1/dzendqev2/upload",
          formData,
          config,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;
          const fileURL = { url: data.secure_url, id: data.asset_id }; // You should store this URL for future references in your app
          progressDiv.style.display = "none";
          setupload([]);
          return fileURL;
        });
    });

    // Once all the files are uploaded
    await axios.all(uploaders).then(async (result) => {
      setfile({ ...file, files: result });
      setPost({...Post , image: result})
     
    //   dispatch(addServiceFile({ ...file, files: result }));
    //   setPing(!ping);
      // ... perform after upload is successful operation
    });
  };

  return (
    <div className="">

          <div className="addImage"><br/>
            <label for="input-upload">
              <input
                className="input-upload"
                type="file"
                multiple
                name="image"
                accept="image/*"
                required
                onChange={(e) => {
                  setupload(Object.values(e.target.files));
                }}
              /><br/>
            </label><br/>
            
            {upload[0] ? (
              <input
                className="btn-upload"
                type="button"
                value="upload"
                onClick={() => {
                  handleDrop();
                }}
              />
            ) : null}
          </div>
          <div id="progress-div" style={{ display: "none" }}>
            <label for="progress-bar">0%</label>
            <progress id="progress-bar" value="0" max="100"></progress>
          </div>
      
    </div>
  );
}

export default AddFiles;