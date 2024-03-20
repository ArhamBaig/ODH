const InnerTopicList = ({heading ,list }) => {
  return (
    <div className="p-5 border-2 rounded-2xl border-primary mx-3 bg-tertiary/5 my-10">
        <h3 className="text-2xl font-bold text-primary">{heading}</h3>
      <ul className=" ">
        {list.map((topic, index) => {
          return (
            <li key={index} className="py-1">
              {topic}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InnerTopicList;
