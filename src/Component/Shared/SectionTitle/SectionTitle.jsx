
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <div className="mx-auto text-center md:w-4/12 mt-10">
                <p className="text-xl font-semibold text-yellow-600">---{heading}---</p>
                <hr className="mt-6" />
                <p className="text-4xl font-bold uppercase border-y-4 py-4">{subHeading}</p>
            </div>
        </div>
    );   
};

export default SectionTitle;