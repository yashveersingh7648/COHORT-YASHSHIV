
// 05-08-25
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ManageManpower.module.css';
// import Spinner from '../Spinner/Spinner';

// const BASE_URL = "http://localhost:8000";
// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "https://supcohort-muvm.onrender.com

";

const ManageManpower = () => {
  const [positions, setPositions] = useState([]);
  const [editingPosition, setEditingPosition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchManpowerData();
  }, []);

 const fetchManpowerData = async () => {
  setIsLoading(true);
  setError(null);
  
  try {
    const businessUser = JSON.parse(localStorage.getItem('businessUser'));
    
    if (!businessUser || !businessUser.token) {
      setError('Please login again');
      localStorage.removeItem('businessUser');
      window.location.href = '/';
      return;
    }

    const token = businessUser.token;
    
    console.log("Frontend user email:", businessUser.email);

    const response = await axios.get(`${API_URL}/api/manpower`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'x-auth-token': token
      }
    });
    
    console.log("API response data:", response.data);
    
    setPositions(response.data.data || []);
  } catch (error) {
    console.error('Fetch error:', error);
    
    if (error.response?.status === 401) {
      setError('Session expired. Please login again.');
      
      localStorage.removeItem('businessUser');
      window.location.href = '/';
    } else {
      setError(error.response?.data?.error || error.message);
    }
  } finally {
    setIsLoading(false);
  }
};

  const handleEdit = (position) => {
    setEditingPosition({...position});
  };

  // Frontend code
// handleUpdate function mein yeh changes karein:
const handleUpdate = async () => {
  try {
    setIsLoading(true);
    const businessUser = JSON.parse(localStorage.getItem('businessUser'));
    const token = businessUser?.token;

    const response = await axios.put(
      `${API_URL}/api/manpower/${editingPosition._id}`,
      editingPosition,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data.success) {
      setSuccess('Position updated successfully');
      
      // YAHAN PAR IMPORTANT CHANGE - Functional update use karein
      setPositions(prevPositions => 
        prevPositions.map(pos => 
          pos._id === editingPosition._id ? response.data.data : pos
        )
      );
      
      setTimeout(() => setSuccess(null), 3000);
      setEditingPosition(null);
    }
  } catch (error) {
    setError(error.response?.data?.error || error.message || 'Update failed');
  } finally {
    setIsLoading(false);
  }
};

const handleDelete = async (id) => {
  try {
    setDeletingId(id);
    const businessUser = JSON.parse(localStorage.getItem('businessUser'));
    const token = businessUser?.token;

    console.log("Deleting position with ID:", id);
    console.log("Full URL:", `${API_URL}/api/manpower/${id}`);
    console.log("Using token:", token);

    const response = await axios.delete(`${API_URL}/api/manpower/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("Delete response:", response.data);
    
    if (response.data.success) {
      setSuccess('Position deleted successfully');
      setTimeout(() => setSuccess(null), 3000);
      
      // State update karein bina refresh kiye
      setPositions(prevPositions => 
        prevPositions.filter(pos => pos._id !== id)
      );
    }
  } catch (error) {
    console.error('Delete error:', error);
    setError(error.response?.data?.error || error.message || 'Delete failed');
  } finally {
    setDeletingId(null);
  }
};

  const handleChange = (e) => {
    setEditingPosition({ 
      ...editingPosition, 
      [e.target.name]: e.target.value 
    });
  };

  return (
    <div className={styles.manageWrapper}>
      <h2>Manage Manpower Positions</h2>

      {error && (
        <div className={styles.errorAlert}>
          {error}
          <button onClick={() => setError(null)} className={styles.closeAlert}>
            ×
          </button>
        </div>
      )}
      
      {success && (
        <div className={styles.successAlert}>
          {success}
          <button onClick={() => setSuccess(null)} className={styles.closeAlert}>
            ×
          </button>
        </div>
      )}

      {isLoading && !deletingId ? (
        <div className={styles.loading}>
          {/* <Spinner size="medium" /> */}
          <p>Loading positions...</p>
        </div>
      ) : (
        <div className={styles.cardGrid}>
          {positions.length > 0 ? (
            positions.map((position) => (
              <div key={position._id} className={styles.requirementCard}>
                <h3>{position.designation}</h3>
                <p><strong>Positions:</strong> {position.noOfPositions}</p>
                <p><strong>Experience:</strong> {position.experience}</p>
                <p><strong>Location:</strong> {position.location}</p>
                <p><strong>Status:</strong> {position.status || 'Active'}</p>
                
                <div className={styles.btnGroup}>
                  <button 
                    onClick={() => handleEdit(position)}
                    className={`${styles.btn} ${styles.editBtn}`}
                    disabled={deletingId === position._id}
                  >
                    Edit
                  </button>
                 <button 
  onClick={() => handleDelete(position._id)}
  disabled={deletingId === position._id}
  className={`${styles.btn} ${styles.deleteBtn}`}
>
  {deletingId === position._id ? 'Deleting...' : 'Delete'}
</button>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noData}>
              <p>No manpower positions found for your account.</p>
              <button onClick={fetchManpowerData} className={styles.refreshBtn}>
                Refresh
              </button>
            </div>
          )}
        </div>
      )}

      {editingPosition && (
        <div className={styles.editForm}>
          <h3>Edit Position</h3>
          
          <div className={styles.formGroup}>
            <label>Designation</label>
            <input
              name="designation"
              value={editingPosition.designation || ''}
              onChange={handleChange}
              placeholder="Designation"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Number of Positions</label>
            <input
              type="number"
              name="noOfPositions"
              value={editingPosition.noOfPositions || ''}
              onChange={handleChange}
              placeholder="Number of Positions"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Experience Required</label>
            <input
              name="experience"
              value={editingPosition.experience || ''}
              onChange={handleChange}
              placeholder="Experience"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Location</label>
            <input
              name="location"
              value={editingPosition.location || ''}
              onChange={handleChange}
              placeholder="Location"
            />
          </div>

          <div className={styles.formActions}>
            <button
              onClick={handleUpdate}
              disabled={isLoading}
              className={`${styles.btn} ${styles.updateBtn}`}
            >
              {isLoading ? 'Updating...' : 'Update'}
            </button>
            <button
              onClick={() => setEditingPosition(null)}
              className={`${styles.btn} ${styles.cancelBtn}`}
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageManpower;
