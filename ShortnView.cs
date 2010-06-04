﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Forms.Integration;

namespace Soylent
{
    public class ShortnView : HITView
    {
        Button ShortnButton;
        public ShortnView(string workType, ShortenData data) : base(workType, data)
        {
            //Globals.Soylent.soylent.Controls.Add(new System.Windows.Forms.Button());
            ShortnButton = new Button();
            ShortnButton.Content = "Shortn";
            ShortnButton.Name = "Shortn";
            ShortnButton.Height = 23;
            ShortnButton.Width = 80;
            ShortnButton.IsEnabled = false;
            ShortnButton.Click += new RoutedEventHandler(Shortn_Clicked);

            data.register(this);
            //ShortnButton.
            //ShortnButton.Click = Shortn_Clicked;
            stages.Children.Add(ShortnButton);
        }
        public void Shortn_Clicked(object sender, RoutedEventArgs e)
        {
            System.Windows.Forms.Form newForm = new System.Windows.Forms.Form();
            newForm.Width = 1195;
            newForm.Height = 380;
            newForm.BackColor = System.Drawing.Color.White;

            // Create the ElementHost control for hosting the
            // WPF UserControl.
            ElementHost host = new ElementHost();
            host.Width = newForm.Width;
            host.Height = newForm.Height;

            // Create the WPF UserControl.
            //Word.Range toShorten = Globals.Soylent.Application.Selection.Range;
            ShortenDialog sd = new ShortenDialog(data as ShortenData);

            // Assign the WPF UserControl to the ElementHost control's
            // Child property.

            host.Child = sd;

            // Add the ElementHost control to the form's
            // collection of child controls.
            newForm.Controls.Add(host);
            newForm.Show();
            // data.
            //stageview.hitProgress.Foreground = Brushes.Blue;

            foreach (StageView stageview in stageList.Values)
            {
                stageview.hitProgress.Foreground = Brushes.LightSkyBlue;
            }
        }
        public void shortenDataReceived()
        {
            foreach (StageView stageview in stageList.Values)
            {
                stageview.hitProgress.Foreground = Brushes.Blue;
            }
            this.ShortnButton.IsEnabled = true;
        }
    }
}
