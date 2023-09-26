function status(request, response) {
  response.status(200).json({ message: "Status successfully!" });
}

export default status;
