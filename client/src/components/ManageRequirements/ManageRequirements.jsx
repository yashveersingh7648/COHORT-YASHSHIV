

// 05-08-25
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ManageRequirements.module.css';

// const BASE_URL = "http://localhost:8000";
// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const ManageRequirements = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Get business user data from localStorage
      const businessUser = JSON.parse(localStorage.getItem('businessUser'));
      
      if (!businessUser || !businessUser.token) {
        throw new Error('Please login to view requirements');
      }

      const response = await axios.get(`${API_URL}/api/requirements`, {
        headers: {
          'Authorization': `Bearer ${businessUser.token}`,
          'x-auth-token': businessUser.token
        }
      });
      
      if (response.data?.success) {
        // Filter data to only show records for this business user
        const userData = response.data.data.filter(item => 
          item.userEmail === businessUser.email || 
          item.companyEmail === businessUser.email
        );
        setItems(userData);
      } else {
        throw new Error(response.data?.error || 'Invalid response format');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError(error.response?.data?.error || error.message || 'Failed to fetch requirements');
      
      if (error.response?.status === 401) {
        // Clear invalid session and reload
        localStorage.removeItem('businessUser');
        window.location.href = '/business-login'; // Redirect to login page
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingItem({...item});
  };

  const handleUpdate = async () => {
    try {
      setIsLoading(true);
      const businessUser = JSON.parse(localStorage.getItem('businessUser'));
      
      if (!businessUser?.token) {
        throw new Error('Session expired. Please login again.');
      }

      const response = await axios.put(
        `${API_URL}/api/requirements/${editingItem._id}`,
        editingItem,
        {
          headers: {
            'Authorization': `Bearer ${businessUser.token}`,
            'x-auth-token': businessUser.token
          }
        }
      );

      if (response.data.success) {
        setSuccess('Requirement updated successfully');
        setTimeout(() => setSuccess(null), 3000);
        fetchData(); // Refresh the list
        setEditingItem(null); // Close edit form
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
      
      if (!businessUser?.token) {
        throw new Error('Session expired. Please login again.');
      }

      const response = await axios.delete(`${API_URL}/api/requirements/${id}`, {
        headers: {
          'Authorization': `Bearer ${businessUser.token}`,
          'x-auth-token': businessUser.token
        }
      });

      if (response.data.success) {
        setSuccess('Requirement deleted successfully');
        setTimeout(() => setSuccess(null), 3000);
        fetchData(); // Refresh the list
      }
    } catch (error) {
      setError(error.response?.data?.error || error.message || 'Delete failed');
      
      if (error.response?.status === 401) {
        localStorage.removeItem('businessUser');
        window.location.href = '/business-login';
      }
    } finally {
      setDeletingId(null);
    }
  };

  const handleChange = (e) => {
    setEditingItem({ 
      ...editingItem, 
      [e.target.name]: e.target.value 
    });
  };

  return (
    <div className={styles.manageWrapper}>
      <h2>Manage Requirements</h2>

      {/* Status Messages */}
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

      {/* Loading State */}
      {isLoading && !deletingId && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading requirements...</p>
        </div>
      )}

      {/* Requirements List */}
      <div className={styles.cardGrid}>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item._id} className={styles.requirementCard}>
              <h3>{item.companyName}</h3>
              <p><strong>Type:</strong> {item.companyType}</p>
              <p><strong>Product:</strong> {item.product}</p>
              <p><strong>Team Size:</strong> {item.teamSize}</p>
              <p><strong>Category:</strong> {item.categoryType}</p>
              <p><strong>City:</strong> {item.companyCity}</p>
              <p><strong>State:</strong> {item.companyState}</p>
              <p><strong>Pincode:</strong> {item.companyPincode}</p>
              
              <div className={styles.btnGroup}>
                <button 
                  onClick={() => handleEdit(item)} 
                  className={`${styles.btn} ${styles.editBtn}`}
                  disabled={deletingId === item._id}
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(item._id)}
                  disabled={deletingId === item._id}
                  className={`${styles.btn} ${styles.deleteBtn}`}
                >
                  {deletingId === item._id ? (
                    <>
                      <span className={styles.spinner}></span>
                      Deleting...
                    </>
                  ) : 'Delete'}
                </button>
              </div>
            </div>
          ))
        ) : (
          !isLoading && (
            <div className={styles.noData}>
              <p>No requirements found for your account.</p>
              <button onClick={fetchData} className={styles.refreshBtn}>
                Refresh
              </button>
            </div>
          )
        )}
      </div>

      {/* Edit Form */}
      {editingItem && (
        <div className={styles.editForm}>
          <h3>Edit Requirement</h3>
          
          <div className={styles.formGroup}>
            <label>Company Name</label>
            <input 
              name="companyName" 
              value={editingItem.companyName || ''} 
              onChange={handleChange} 
              placeholder="Company Name" 
            />
          </div>

          <div className={styles.formGroup}>
            <label>Company Type</label>
            <input 
              name="companyType" 
              value={editingItem.companyType || ''} 
              onChange={handleChange} 
              placeholder="Company Type" 
            />
          </div>

          <div className={styles.formGroup}>
            <label>Product</label>
            <input 
              name="product" 
              value={editingItem.product || ''} 
              onChange={handleChange} 
              placeholder="Product" 
            />
          </div>

          <div className={styles.formGroup}>
            <label>Team Size</label>
            <input 
              type="number"
              name="teamSize" 
              value={editingItem.teamSize || ''} 
              onChange={handleChange} 
              placeholder="Team Size" 
            />
          </div>

          <div className={styles.formGroup}>
            <label>Category</label>
            <input 
              name="categoryType" 
              value={editingItem.categoryType || ''} 
              onChange={handleChange} 
              placeholder="Category" 
            />
          </div>

          <div className={styles.formGroup}>
            <label>City</label>
            <input 
              name="companyCity" 
              value={editingItem.companyCity || ''} 
              onChange={handleChange} 
              placeholder="City" 
            />
          </div>

          <div className={styles.formGroup}>
            <label>State</label>
            <input 
              name="companyState" 
              value={editingItem.companyState || ''} 
              onChange={handleChange} 
              placeholder="State" 
            />
          </div>

          <div className={styles.formGroup}>
            <label>Pincode</label>
            <input 
              name="companyPincode" 
              value={editingItem.companyPincode || ''} 
              onChange={handleChange} 
              placeholder="Pincode" 
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
              onClick={() => setEditingItem(null)} 
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

export default ManageRequirements;