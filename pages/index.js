import style from '../styles/style.css';

const fakeStore = {
  lists: {
    yoloList: ['shit', 'daddy', 'ball', 'fame'],
  },
};

class Index extends React.Component {
  render() {
    const { yoloList } = fakeStore.lists;
    return (
      <div>
        <header>
          <button>Edit lists</button>
          <button>Show lists</button>
          <button>Didn't get it</button>
          <button>Settings</button>
        </header>
        <div className="vocab-List">
          <div className="vocab-List-Entries">
            <input type="text" defaultValue="English" />
            {yoloList.map((item, index) => (
              <input type="text" defaultValue={item} key={index} />
            ))}
          </div>
          <div className="vocab-List-Results">
            <input type="text" defaultValue="Français" />
            {['caca', 'papa', 'boule', 'gloire'].map((item, index) => (
              <input type="text" defaultValue={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
