import './RecommendedProductivity.css';

function RecommendedProductivity() {
  return (
    <div className="recommended-productivity card card-4">
      <h2>Recommended Apps and Tools</h2>
      <ul>
        <li>
          <a href="https://trello.com/" target="_blank" rel="noreferrer">
            Trello:
          </a>{' '}
          Project management with kanban boards
        </li>
        <li>
          <a href="http://figma.com/" target="_blank" rel="noreferrer">
            Figma:
          </a>{' '}
          Collaborative UX/UI design tool
        </li>
        <li>
          <a href="https://stackoverflow.com" target="_blank" rel="noreferrer">
            Stack Overflow:
          </a>{' '}
          Question and answer site for professional and enthusiastic programmers
        </li>
        <li>
          <a href="https://google.co.uk" target="_blank" rel="noreferrer">
            Google:
          </a>{' '}
          The best notebook anyone could ask for
        </li>
      </ul>
    </div>
  );
}

export default RecommendedProductivity;
