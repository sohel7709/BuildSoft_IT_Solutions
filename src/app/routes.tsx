import React from 'react';
import { RouteObject } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import PortfolioPage from '../pages/PortfolioPage';
import CaseStudyPage from '../pages/CaseStudyPage';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';
import ContactPage from '../pages/ContactPage';
import PricingPage from '../pages/PricingPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import NotFoundPage from '../pages/NotFoundPage';

/**
 * Route definition used by AppShell.
 * Uses React Router params for detail pages.
 */
export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/portfolio', element: <PortfolioPage /> },
  { path: '/portfolio/:id', element: <CaseStudyPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog/:id', element: <BlogPostPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/refund', element: <RefundPage /> },
  { path: '*', element: <NotFoundPage /> }
];

