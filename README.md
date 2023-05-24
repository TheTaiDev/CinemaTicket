# CinemaTicket

## 1. Home Screen

**Định nghĩa và khởi tạo state cho chức năng tìm kiếm**

```react
const [searchVisible, setSearchVisible] = useState(false);
const [searchText, setSearchText] = useState("");
const [searchResults, setSearchResults] = useState(movieData);
```

**Xử lý sự kiện khi người dùng nhấn vào nút tìm kiếm:

```react
const handleSearchPress = () => {
  setSearchVisible(true);
};
```
