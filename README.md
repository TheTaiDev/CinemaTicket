# Cinema Tickets Booking App
## Demo App (Hoàn thành giao diện)
[![Demo](./assets/image/videodemo1.gif)]([https://www.example.com/video](https://i.ytimg.com/vi/PRjtg3mwPvw/mqdefault.jpg))

## 1. Home Screen

**Định nghĩa và khởi tạo state cho chức năng tìm kiếm**

```react
const [searchVisible, setSearchVisible] = useState(false);
const [searchText, setSearchText] = useState("");
const [searchResults, setSearchResults] = useState(movieData);
```

**Xử lý sự kiện khi người dùng nhấn vào nút tìm kiếm**

**Xử lý sự kiện khi người dùng nhấn vào nút tìm kiếm**


```react
const handleSearchPress = () => {
  setSearchVisible(true);
};
```

**Xử lý sự kiện khi người dùng hủy tìm kiếm**

```react
const handleSearchCancel = () => {
  setSearchVisible(false);
  setSearchText("");
  setSearchResults(movieData);
};
```

**Xử lý sự kiện khi người dùng nhấn nút gửi tìm kiếm**

```react
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

**Hiển thị danh sách kết quả tìm kiếm hoặc thông báo không tìm thấy kết quả**

```react
{searchResults.length > 0 ? (
  {/* Giao diện danh sách kết quả tìm kiếm */}
) : (
  {/* Giao diện thông báo không tìm thấy kết quả */}
)}
```

**Hiển thị các phần tử trong danh sách kết quả tìm kiếm**

```react
{searchResults.map((val, index) => {
  return (
    <View
      style={{
        width: 170,
        height: 278,
      }}
      key={index}
    >
      {/* Giao diện hình ảnh và thông tin phim */}
    </View>
  );
})}
```

## 2. Màn hình hiển thị rạp, thời gian

**Khởi tạo và cập nhật trạng thái**

```react
const [onSelectedDateChange, setSelectedDate] = useState("");
const [seatsData, setSeatsData] = useState([]);
const [mall, setMall] = useState([]);
const [showTimes, setShowTimes] = useState([]);

------------------------------------------------------------
onSelectedDateChange và setSelectedDate: Lưu trữ và cập nhật trạng thái ngày được chọn từ datepicker.
seatsData và setSeatsData: Lưu trữ và cập nhật dữ liệu ghế ngồi.
mall và setMall: Lưu trữ và cập nhật thông tin về trung tâm mua sắm được chọn.
showTimes và setShowTimes: Lưu trữ và cập nhật thông tin về các khung giờ chiếu.

```

**Hiển thị datepicker ngang**

```react
<HorizontalDatepicker
  // ...
  HorizontalDatepicker: Thành phần nguồn mở tuỳ chỉnh để hiển thị datepicker ngang. Các thuộc tính được cung cấp để tùy chỉnh giao diện và hoạt động của datepicker.
/>

```

**Hiển thị danh sách trung tâm và khung giờ chiếu**

```react
{mallsData.map((item, index) => { ... })}: Sử dụng map để duyệt qua danh sách các trung tâm mua sắm.

```

## 3. Hiển thị thông tin của ghế ngồi, tiền thanh toán

**Sử dụng Hook useRoute để lấy thông tin về route**

```react
const route = useRoute();
```

**Sử dụng Hook useContext để lấy và sử dụng dữ liệu từ MoviesCards context**

```react
const { seats, setSeats } = useContext(MoviesCards);

```

**Định nghĩa hàm onSeatSelect để xử lý sự kiện khi người dùng chọn hoặc bỏ chọn ghế ngồi**

```react
const onSeatSelect = (item) => {
  const seatSeSelected = seats.find((seat) => seat === item);

  if (seatSeSelected) {
    setSeats(seats.filter((seat) => seat !== item));
  } else {
    setSeats([...seats, item]);
  }
};
```

**FlatList dùng để hiển thị danh sách ghế ngồi**

```react
numColumns={7}: Thuộc tính numColumns xác định số cột trong danh sách ghế, ở đây là 7 cột.
data={route.params.tableSeats}: Thuộc tính data xác định dữ liệu để hiển thị trong danh sách, ở đây là tableSeats được lấy từ tham số route.
renderItem={({ item }) => ... }: Thuộc tính renderItem xác định cách hiển thị từng mục trong danh sách. Mỗi mục được truyền vào trong hàm render là một đối tượng { item }.
{seats.includes(item) ? ... : ... }: Đoạn mã này kiểm tra xem ghế ngồi có trong danh sách ghế đã chọn (seats) hay không để xác định kiểu dáng và màu sắc của ghế.
```
