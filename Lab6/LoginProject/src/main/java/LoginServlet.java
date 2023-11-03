import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String email = req.getParameter("email");
        String password = req.getParameter("pws");

        if ("qwer@gmail.com".equals(email) && "12345".equals(password)) {
            // Đăng nhập thành công
            resp.sendRedirect("success.jsp");
        } else {
            // Đăng nhập thất bại
            req.setAttribute("error", "Sai thông tin đăng nhập");
            req.getRequestDispatcher("index.jsp").forward(req, resp);
        }
    }

}