
// 11-07-25
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  FaUser, FaSearch, FaBuilding, FaMapMarkerAlt,
  FaEnvelope, FaPhone, FaCity, FaMapPin, FaFilePdf
} from 'react-icons/fa';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardPage.module.css';
import { useSyncHiddenRemoved } from "../../utils/dashboardState";

// const BASE_URL = "http://localhost:8000";
// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const DashboardPage = ({ agencies }) => {
  const [selectedLocation] = useState('All India');
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [productFilter, setProductFilter] = useState('');
  const { hiddenIds, removedIds } = useSyncHiddenRemoved();
  const navigate = useNavigate();
const finalDataSource = agencies && agencies.length > 0 ? agencies : data;
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_URL}/api/dashboard`);
      
      const formattedData = res.data.map(item => {
        const getFileUrl = (path) => {
          if (!path) return null;
          const normalizedPath = path.startsWith('/uploads/') ? path : `/uploads/${path}`;
          return `${API_URL}${normalizedPath}`;
        };

        return {
          ...item,
          bannerUrl: getFileUrl(item.companyBanner),
          logoUrl: getFileUrl(item.companyLogo),
          pdfUrl: getFileUrl(item.profilePdf),
          companyName: item.companyName || 'Unnamed Company',
          contactName: item.contactName || 'N/A',
          categoryType: item.categoryType || 'N/A',
          companyProduct: item.companyProduct || 'N/A',
          companyGst: item.companyGst || 'N/A',
          companyPhone: item.companyPhone || 'N/A',
          companyCity: item.companyCity || 'N/A',
          companyPincode: item.companyPincode || 'N/A',
          companyState: item.companyState || 'N/A',
          companyStage: item.companyStage || 'N/A',
          totalManpower: item.totalManpower || 'N/A',
          productType: item.productType || 'N/A'
        };
      });

      setData(formattedData);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

 useEffect(() => {
  fetchData();
}, [fetchData]);

  // Filter out hidden and removed items
const filteredData = finalDataSource.filter(item => {
    const isHidden = hiddenIds[item._id];
    const isRemoved = removedIds[item._id];
    
    // Skip hidden and removed items
    if (isHidden || isRemoved) return false;
    
    // Text search across all specified fields
    const matchesSearch = !search || 
      item.companyName.toLowerCase().includes(search.toLowerCase()) ||
      item.categoryType.toLowerCase().includes(search.toLowerCase()) ||
      item.companyProduct.toLowerCase().includes(search.toLowerCase()) ||
      item.companyStage.toLowerCase().includes(search.toLowerCase()) ||
      item.companyState.toLowerCase().includes(search.toLowerCase()) ||
      item.companyCity.toLowerCase().includes(search.toLowerCase()) ||
      item.companyPincode.toLowerCase().includes(search.toLowerCase());

    // Category type filter
    const matchesCategory = !categoryFilter || 
      item.categoryType === categoryFilter;

    // Product type filter
    const matchesProduct = !productFilter || 
      item.productType === productFilter;

    return matchesSearch && matchesCategory && matchesProduct;
  });

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const resetFilters = () => {
    setSearch('');
    setCategoryFilter('');
    setProductFilter('');
  };

  const MediaDisplay = ({ item }) => {
    const [imgError, setImgError] = useState({ banner: false, logo: false });

    return (
      <div className={styles.cardBanner}>
        {item.bannerUrl && !imgError.banner ? (
          <img
            src={item.bannerUrl}
            onError={() => setImgError(prev => ({ ...prev, banner: true }))}
            alt="Banner"
            className={styles.bannerImage}
          />
        ) : (
          <div className={styles.defaultBanner}><FaBuilding size={48} color="#666" /></div>
        )}

        {item.logoUrl && !imgError.logo ? (
          <img
            src={item.logoUrl}
            onError={() => setImgError(prev => ({ ...prev, logo: true }))}
            alt="Logo"
            className={styles.bannerLogo}
          />
        ) : (
          <div className={styles.defaultLogo}><FaBuilding size={24} color="#444" /></div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}><h2>AgencyHub</h2></div>
        <nav className={styles.navMenu}>
          <button className={`${styles.tabButton} ${styles.activeTab}`}>
            <FaUser className={styles.tabIcon} /> Agency
          </button>
        </nav>
        <div className={styles.sidebarFooter}><p>© 2025 AgencyHub</p></div>
      </div>

      <main className={styles.content}>
        <section className={styles.contentBody}>
          {error ? (
            <div className={styles.errorState}><p>{error}</p></div>
          ) : loading ? (
            <div className={styles.loadingState}>
              <div className={styles.spinner}></div>
              <p>Loading...</p>
            </div>
          ) : filteredData.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>No companies found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className={styles.twoColumnGrid}>
              {filteredData.map((item) => (
                <div key={item._id} className={styles.card}>
                  <MediaDisplay item={item} />
                  <div className={styles.cardHeader}>
                    <div className={styles.cardTitle}>
                      <h3>{item.companyName}</h3>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardData}>
                      <div className={styles.infoItem}><FaUser /> {item.contactName}</div>
                      <div className={styles.infoItem}><FaBuilding /> {item.categoryType}</div>
                      <div className={styles.infoItem}><FaEnvelope /> {item.companyGst}</div>
                      <div className={styles.infoItem}><FaPhone /> {item.companyPhone}</div>
                      <div className={styles.infoItem}><FaCity /> {item.companyCity}</div>
                      <div className={styles.infoItem}><FaMapPin /> {item.companyPincode}</div>
                      <div className={styles.infoItem}><FaMapMarkerAlt /> {item.companyState}</div>
                      <div className={styles.infoItem}><FaUser /> {item.totalManpower}</div>
                    </div>
                    {item.pdfUrl && (
                      <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className={styles.pdfLink} onClick={(e) => e.stopPropagation()}>
                        <FaFilePdf /> View Company Profile
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;