const CreateAssignment = () => {

  const createAssignment = event =>{

    event.preventDefault();
    
}
    return (
      <div className="">
      <div className="hero min-h-screen bg-base-200 m-6">
      <h2>Create your own Assignment</h2>
        <form onSubmit={createAssignment} className="card shrink-0 w-[45%] shadow-2xl bg-[#F4F3F0] m-4">
        <div className="form-control">
          <label htmlFor="title" className="label m-2">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" id="title" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
          <label htmlFor="description" className="label m-2">
            <span className="label-text">Description</span>
          </label>
          <textarea name="description" id="description" className="input input-bordered m-2"></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="marks" className="label m-2">
            <span className="label-text">Marks</span>
          </label>
          <input type="number" name="marks" id="marks" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
          <label htmlFor="thumbnailUrl" className="label m-2">
            <span className="label-text">Thumbnail Image URL</span>
          </label>
          <input type="text" name="thumbnailUrl" id="thumbnailUrl" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
          <label htmlFor="difficulty" className="label m-2">
            <span className="label-text">Difficulty Level</span>
          </label>
          <select name="difficulty" id="difficulty" className="input input-bordered m-2">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button type="submit" className="btn bg-orange-500 m-2">Create Assignment</button>
        </form>
      </div>
    </div>
    )
  }
  
  export default CreateAssignment;