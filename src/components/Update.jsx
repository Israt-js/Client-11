import { useLoaderData } from "react-router-dom";

const Update = () => {
    const updatee = useLoaderData()
    const { id } = updatee;

    const updateAssignment = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const thumbnailUrl = form.thumbnailUrl.value;
        const difficulty = form.difficulty.value;
        const update = { title, description, marks, thumbnailUrl, difficulty };
        console.log(update);
    
        const { _id } = updatee; 
    
        fetch(`http://localhost:5000/createAssign/${id}`, { 
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if (result) {
                alert('Update successfully');
                form.reset();
            }
        });
    }
    
    
    return(
      <div className="">
<div className="hero min-h-screen bg-base-200 m-6">
    <h2>Update</h2>
    <form onSubmit={updateAssignment} className="card shrink-0 w-[45%] shadow-2xl bg-[#F4F3F0] m-4">
        <div className="form-control">
          <label htmlFor="title" className="label m-2">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" id="title" placeholder="Type the title" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
          <label htmlFor="description" className="label m-2">
            <span className="label-text">Description</span>
          </label>
          <textarea name="description" id="description" placeholder="Type description" className="input input-bordered m-2" required></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="marks" className="label m-2">
            <span className="label-text">Marks</span>
          </label>
          <input type="number" name="marks" id="marks" placeholder="Type marks" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
          <label htmlFor="thumbnailUrl" className="label m-2">
            <span className="label-text">Thumbnail Image URL</span>
          </label>
          <input type="text" name="thumbnailUrl" id="thumbnailUrl" placeholder="Type image url" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
          <label htmlFor="difficulty" className="label m-2">
            <span className="label-text">Difficulty Level</span>
          </label>
          <select name="difficulty" id="difficulty" className="input input-bordered m-2" required>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <input type="submit" value="Update" className="btn w-[97%] bg-slate-700 text-white ml-2" />
        </form>
    </div>
     </div>
    )
}
export default Update;
