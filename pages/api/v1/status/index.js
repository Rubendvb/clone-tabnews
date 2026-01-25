function status(request, response) {
  response.status(200).json({
    status: "ok",
    message: "todos os endpoints estão funcionando corretamente",
  });
}
export default status;
