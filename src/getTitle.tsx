type GetTitleProps = {
    header: boolean,
}
const GetTitle = (props: GetTitleProps) => {
    const {header} = props;
  return (
    <div className="App">
      {header}
    </div>
  );
}

export default GetTitle;