USE [Aiko]
GO

/****** Object:  Table [dbo].[VehicleLocation]    Script Date: 19/03/2021 17:45:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[VehicleLocation](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Latitude] [decimal](18, 10) NOT NULL,
	[Longitude] [decimal](18, 10) NOT NULL,
	[VehicleId] [int] NOT NULL,
	[CreatedAt] [datetime] NOT NULL,
	[DisabledAt] [datetime] NULL,
 CONSTRAINT [PK_VehicleLocation] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[VehicleLocation]  WITH CHECK ADD  CONSTRAINT [FK_VehicleLocation_VehicleId] FOREIGN KEY([VehicleId])
REFERENCES [dbo].[Vehicle] ([Id])
GO

ALTER TABLE [dbo].[VehicleLocation] CHECK CONSTRAINT [FK_VehicleLocation_VehicleId]
GO


