import pool from '../config/database.js';

export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    return res.json(result.rows);
  } catch (error) {
    console.error('DB error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    console.error('Lỗi lấy danh sách người dùng:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const createUser = async (req, res) => {
  try {
    const {
      username,
      email,
      password_hash,
      full_name,
      avatar_url,
      phone_number,
      gender,
      date_of_birth,
      role
    } = req.body;

    const result = await pool.query(
      `INSERT INTO users (
        username, email, password_hash, full_name, avatar_url, phone_number, gender,
        date_of_birth, role
      ) VALUES (
        $1, $2, $3, $4, $5, $6,
        $7, $8, $9
      ) RETURNING *`,
      [
        username,
        email,
        password_hash,
        full_name,
        avatar_url,
        phone_number,
        gender,
        date_of_birth,
        role
      ]
    );

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('❌ Lỗi tạo mới người dùng', error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { username, email, full_name, avatar_url, phone_number, gender, date_of_birth,role } = req.body;

    try{
        const result = await pool.query(
            `UPDATE users SET
                username = $1,
                email = $2,
                full_name = $3,
                avatar_url = $4,
                phone_number = $5,
                gender = $6,
                date_of_birth = $7,
                role = $8
            WHERE id = $9
            RETURNING *`,
            [username, email, full_name, avatar_url, phone_number, gender, date_of_birth, role, userId]
        );
        return res.json(result.rows[0]);
    }catch (error) {
        console.error('❌ Lỗi cập nhật thông tin người dùng:', error.message);
        return res.status(500).json({ error: error.message });
    }
}
export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    
    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
        if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Không tìm thấy người dùng này' });
        }
    
        return res.json({ message: 'Xóa thành công', user: result.rows[0] });
    } catch (error) {
        console.error('❌ Lỗi xóa người dùng:', error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const toggleUserActive = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `UPDATE users SET is_active = NOT is_active WHERE id = $1 RETURNING *;`,
      [id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error toggling user:", err);
    res.status(500).json({ error: "Server error" });
  }
};

