
const Cover = ({image, title, subTitle}) => {
    return (
        <div>
            <div
                className="hero h-[400px]"
                style={{
                    backgroundImage:
                        `url(${image})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            {subTitle}
                        </p>
                         <button className="btn btn-outline border-0 border-b-4 mt-4 hover:border-b-yellow-600 hover:bg-black hover:text-white">View Menu</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;