# CinemaTicket

## 1. Home Screen

**Định nghĩa và khởi tạo state cho chức năng tìm kiếm**

```react
const [searchVisible, setSearchVisible] = useState(false);
const [searchText, setSearchText] = useState("");
const [searchResults, setSearchResults] = useState(movieData);
```
**Xử lý sự kiện khi người dùng nhấn vào nút tìm kiếm**
```react
const handleSearchPress = () => {
  setSearchVisible(true);
};
```
**Xử lý sự kiện khi người dùng hủy tìm kiếm
``` react 
const handleSearchCancel = () => {
  setSearchVisible(false);
  setSearchText("");
  setSearchResults(movieData);
};
```

**Xử lý sự kiện khi người dùng nhấn nút gửi tìm kiếm
``` react 
const handleSearchSubmit = () => {
  console.log("Search Text:", searchText);

  if (searchText.trim() === "") {
    setSearchResults(movieData);
  } else {
    const filteredData = movieData.filter(
      (movie) =>
        movie.Title.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.Year.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResults(filteredData);
  }
};

```
**Hiển thị danh sách kết quả tìm kiếm hoặc thông báo không tìm thấy kết quả
```react
{searchResults.length > 0 ? (
  {/* Giao diện danh sách kết quả tìm kiếm */}
) : (
  {/* Giao diện thông báo không tìm thấy kết quả */}
)}
```

