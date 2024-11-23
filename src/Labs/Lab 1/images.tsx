const Images = () => {
    const imageUrl = "https://images.unsplash.com/photo-1722352565642-47e4942af628?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
      <div>
        <img src={imageUrl} width={500} height={500} />
      </div>
    );
  }
  
  export default Images;
  