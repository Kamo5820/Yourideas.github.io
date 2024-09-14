import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class WelcomePopup {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Welcome to YOUR IDEAS OUR CREATION");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);
        frame.setLayout(new FlowLayout());

        JLabel label = new JLabel("Welcome to YOUR IDEAS OUR CREATION");
        label.setFont(new Font("Arial", Font.BOLD, 16));

        JButton yesButton = new JButton("Yes");
        yesButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Grant access to the page
                frame.dispose();
                // Redirect to the user's page
                new UserPage().setVisible(true);
            }
        });

        JButton noButton = new JButton("No");
        noButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Redirect to the previous page
                frame.dispose();
            }
        });

        frame.add(label);
        frame.add(yesButton);
        frame.add(noButton);
        frame.setVisible(true);
    }
}