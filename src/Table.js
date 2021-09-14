import React, {Component} from 'react'

class Table extends Component {
  render() {
    const {bookmarkData, removeBookmark} = this.props
    return (
      <table>
        <TableHeader />
        <TableBody bookmarkData={bookmarkData} removeBookmark={removeBookmark}/>
      </table>
    )
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Bookmark</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.bookmarkData.map((row, index) => {
    return (
      <tr key = {index}>
        <td><a href={row.link} target="_blank" rel="noreferrer">{row.name}</a></td>
        <td>
          <button onClick={() => props.removeBookmark(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

export default Table;