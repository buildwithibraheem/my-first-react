
function App() {
  return (
    <div>
      <h1>This is my first React App</h1>

      <ul>
        <li>Laptops</li>
        <li>Mobile</li>
        <li>Accessories</li>
      </ul>

      <h2>My Table</h2>

      <table border="1">
        <tbody>
          <tr>
            <td>Ibraheem</td>
            <td>19</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table>

      <form>
        <div>
          Name:
          <input type="text" value="Ibraheem" readOnly />
        </div>

        <div>
          Age:
          <input type="number" value="19" readOnly />
        </div>

        <div>
          Gender:
          <input type="text" value="Male" readOnly />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;

