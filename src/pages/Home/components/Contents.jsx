import style from "./Contents.module.css";

export default function Contents() {
  const news = [
    {
      id: 1,
      name: "SCAMMER ALERT!!!",
      context:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ad fugiat at aliquid rem temporibus, odit amet culpa suscipit voluptas itaque! Nostrum quidem unde ea molestias nesciunt! Ratione, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae voluptatem atque eum accusantium, quod numquam aliquam incidunt repudiandae tempora quaerat debitis reiciendis unde officiis tempore blanditiis qui recusandae voluptatum!",
      author: "GNN Reporter",
    },
    {
      id: 2,
      name: "WHERE IS MY MONEY!?",
      context:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ad fugiat at aliquid rem temporibus, odit amet culpa suscipit voluptas itaque! Nostrum quidem unde ea molestias nesciunt! Ratione, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae voluptatem atque eum accusantium, quod numquam aliquam incidunt repudiandae tempora quaerat debitis reiciendis unde officiis tempore blanditiis qui recusandae voluptatum!",
      author: "XYZ Reporter",
    },
    {
      id: 3,
      name: "Low Birth Rate Impact On The Global Market",
      context:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ad fugiat at aliquid rem temporibus, odit amet culpa suscipit voluptas itaque! Nostrum quidem unde ea molestias nesciunt! Ratione, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae voluptatem atque eum accusantium, quod numquam aliquam incidunt repudiandae tempora quaerat debitis reiciendis unde officiis tempore blanditiis qui recusandae voluptatum!",
      author: "CNL Reporter",
    },
    {
      id: 4,
      name: "Buy Your First Home... FOR FREE!!!",
      context:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ad fugiat at aliquid rem temporibus, odit amet culpa suscipit voluptas itaque! Nostrum quidem unde ea molestias nesciunt! Ratione, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae voluptatem atque eum accusantium, quod numquam aliquam incidunt repudiandae tempora quaerat debitis reiciendis unde officiis tempore blanditiis qui recusandae voluptatum!",
      author: "Stuff That Reporter",
    },
  ];

  // Function to truncate the text
  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
  };

  return (
    <>
      <div className={style.newsContainer}>
        {news.map((item) => (
          <div key={item.id} className={style.newsItem}>
            <h2>{item.name}</h2>
            <p>{truncateText(item.context, 100)}<a href={`/news/${item.id}`} className={style.readMoreLink}>Read more</a> {/* Read more link */}</p> {/* Truncated context */}
            <p>
              <strong>Author:</strong> {item.author}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
